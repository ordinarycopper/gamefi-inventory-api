# gamefi-inventory-api

A lightweight Web3-inspired game inventory API built with Node.js and Express.  
Simulates wallet-based item ownership for blockchain-integrated games.

> Developed by [@ordinarycopper](https://github.com/ordinarycopper) – full stack dev specializing in crypto, gaming, and emerging tech.

---

## Features

- Mock blockchain wallet system  
- RESTful API endpoints for managing player inventories  
- Add/view items tied to wallet addresses (simulating ownership on-chain)  
- Easily extendable for real smart contract integration (ETH, Solana, etc.)  
- Built with clean code, async handling, and developer clarity in mind

---

## Tech Stack

- **Node.js** – Runtime environment  
- **Express.js** – Lightweight backend framework  
- **JSON** – Simulated data storage (can be swapped for a DB or smart contract)

---

## API Endpoints

### GET `/api/inventory/:wallet`  
Returns a player's inventory based on wallet address.

**Example:**  
`GET /api/inventory/0xABC123`

**Response:**
```json
{
  "username": "copperKnight",
  "wallet": "0xABC123",
  "items": ["sword_of_eth", "shield_of_sol", "potion_of_gas"]
}
