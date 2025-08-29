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

- **Python 3.12** – main language
- **Click** – for building the CLI
- **Boto3** – AWS SDK for Python
- **LocalStack** – optional local testing environment

---

## Example Usage

```bash
# Audit a bucket
python cli.py audit --bucket my-bucket
```
