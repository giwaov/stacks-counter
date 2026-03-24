# Deployment Guide

## Prerequisites
- Stacks CLI installed
- STX tokens for deployment fees

## Testnet Deployment

```bash
stx deploy_contract counter.clar counter 1000 ST...
```

## Mainnet Deployment

```bash
stx deploy_contract counter.clar counter 5000 SP...
```

## Post-Deployment Verification

Call the read-only function to verify:
```bash
stx call_read_only_contract_func SP... counter get-counter
```
