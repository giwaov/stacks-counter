# Architecture

## Overview

The Stacks Counter contract provides a simple incrementing/decrementing counter on the Stacks blockchain.

## Contract Design

### State Variables
- `counter`: A uint that stores the current count value

### Public Functions
- `increment`: Increases counter by 1
- `decrement`: Decreases counter by 1 (with underflow check)
- `get-counter`: Returns current counter value

### Security Considerations
- No owner restrictions
- Underflow protection on decrement
- All state changes emit events for indexing
