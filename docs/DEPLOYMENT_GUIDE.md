# Deployment Guide - Counter Contract

## Prerequisites
- Stacks CLI installed
- STX tokens for deployment fees

## Testnet Deployment

```bash
clarinet deployments apply -p deployments/default.testnet-plan.yaml
```

## Mainnet Deployment

```bash
clarinet deployments apply -p deployments/default.mainnet-plan.yaml
```

## Post-Deployment Verification

After deploying, verify the contract is live:

```bash
stx call_read_only_function <deployer> counter get-counter
```

## Common Issues

| Issue | Solution |
|-------|----------|
| Insufficient STX | Fund your wallet with more STX |
| Nonce mismatch | Wait for pending TX or increment nonce |
