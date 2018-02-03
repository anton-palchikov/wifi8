#!/bin/bash
set -e  # Exit with non-zero if anything fails

BUILD_BRANCH="master"

# Do not build a new version if it is a pull-request or commit not to BUILD_BRANCH
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$BUILD_BRANCH" ]; then
    echo "Not $BUILD_BRANCH, skipping deploy;"
    exit 0
fi

HEAD_COMMIT=`git rev-parse --verify --short HEAD`
BANANA_REPO=`git config remote.origin.url`
BANANA_SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
UPSTREAM_REPO="git@github.com:worldwifi-front/wifi8.git"

echo "Prepare the key..."
# Encryption key is a key stored in travis itself
OUT_KEY="id_rsa"
echo "Trying to decrypt encoded key..."
openssl aes-256-cbc -k "$ENCRYPTION_KEY" -in deploy/id_rsa.enc -out $OUT_KEY -d -md sha256
chmod 600 $OUT_KEY
echo "Add decoded key to the ssh agent keystore"
eval `ssh-agent -s`
ssh-add $OUT_KEY

echo "Add upstream repo"
git add remote upstream $UPSTREAM_REPO
popd

echo "Add new data to the upstream repo"
  git config user.name "Travis CI"
  git config user.email "$COMMIT_AUTHOR_EMAIL"
  git push origin master
else
  echo "There are no changes in result build, so nothing to push forward. End here."
  exit 0
fi

