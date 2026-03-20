#!/bin/bash
# Bootstrap script to create the S3 backend bucket for Terraform state
# Run this ONCE before running terraform init

set -euo pipefail

BUCKET_NAME="demo-websites-tfstate-bucket"
REGION="us-east-1"

echo "Creating Terraform state bucket: ${BUCKET_NAME}"

aws s3api create-bucket \
  --bucket "${BUCKET_NAME}" \
  --region "${REGION}"

echo "Enabling versioning on state bucket..."

aws s3api put-bucket-versioning \
  --bucket "${BUCKET_NAME}" \
  --versioning-configuration Status=Enabled

echo "Enabling server-side encryption..."

aws s3api put-bucket-encryption \
  --bucket "${BUCKET_NAME}" \
  --server-side-encryption-configuration '{
    "Rules": [
      {
        "ApplyServerSideEncryptionByDefault": {
          "SSEAlgorithm": "AES256"
        },
        "BucketKeyEnabled": true
      }
    ]
  }'

echo "Blocking public access on state bucket..."

aws s3api put-public-access-block \
  --bucket "${BUCKET_NAME}" \
  --public-access-block-configuration \
    BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true

echo ""
echo "Terraform state bucket '${BUCKET_NAME}' created successfully!"
echo "You can now run: cd infrastructure && terraform init"
