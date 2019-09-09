#!/bin/bash

set -euo pipefail
IFS=$'\n\t'

if [[ $# -eq 0 ]] ; then
    echo "First argument is missing. Please provide an ACCOUNT_NAME as first argument"
    exit 1
fi

if [[ $# -eq 1 ]] ; then
    echo "Second argument is missing. Please provide a ACCOUNT_KEY"
    exit 1
fi

if [[ $# -eq 2 ]] ; then
    echo "Second argument is missing. Please provide a SOURCE"
    exit 1
fi

# SAVE ARGUMENT VALUES
ACCOUNT_NAME=${1}
ACCOUNT_KEY=${2}
SOURCE=${3}
DESTINATION=${4:-'$web'}

echo "Uploading to Azure"
az storage blob upload-batch --account-name=$ACCOUNT_NAME --account-key=$ACCOUNT_KEY --destination=$DESTINATION --source=$SOURCE 
