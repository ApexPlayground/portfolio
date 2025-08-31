---
id: s3Scan
title: AWS S3 Security CLI
---

# AWS S3 Security CLI

A CLI tool to **scan AWS S3 buckets for security misconfigurations**. Built with **Python, Click, and Boto3**, this tool helps developers and cloud engineers **audit bucket ACLs, CORS settings, policies, and versioning** quickly and safely.

---

## Features

- **ACL Checks:** Detect public buckets, broad write permissions, or FULL_CONTROL granted to non-owners.
- **CORS Checks:** Identify dangerous configurations like PUT/POST/DELETE allowed from all origins.
- **Versioning Check:** Warn if versioning is not enabled.
- **Policy Checks:** Parse bucket policies to find overly permissive or unsafe rules.
- **Full Audit Command:** Run all checks in one go and get a **summary report**.

---

## Technology

- **Python 3.12**: main language
- **Click**: for building the CLI
- **Boto3**: AWS SDK for Python
- **LocalStack**: optional local testing environment

---

## Usage

The CLI works with both **real AWS** and **LocalStack** (local testing).

- **AWS:** Uses your configured AWS credentials (`~/.aws/credentials`) or environment variables.
- **LocalStack:** Specify the `--endpoint-url` to point to your local instance.

---

### Example: Auditing a Bucket (LocalStack)

Before running commands, make sure **LocalStack is running** and your AWS credentials are configured (you only need to do this once per terminal session).

```bash
# Start LocalStack (S3 service)
localstack start

# Audit a bucket in LocalStack
python3 s3scan/cli.py audit \
    --bucket my-bucket \
    --endpoint-url http://localhost:4566 \
    --region us-east-1
```
