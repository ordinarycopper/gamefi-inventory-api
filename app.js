// app.js
// Full Stack Dev Sample by @ordinarycopper
// Simulated Web3 Game Inventory System

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Mock wallet data (as if from a real blockchain)
const wallets = {
  '0xABC123': {
    username: 'copperKnight',
    inventory: ['sword_of_eth', 'shield_of_sol', 'potion_of_gas']
  },
  '0xDEF456': {
    username: 'crypt0Mage',
    inventory: ['wand_of_zk', 'cloak_of_fantom']
  }
};

// Route: Get player inventory by wallet address
app.get('/api/inventory/:wallet', (req, res) => {
  const wallet = req.params.wallet;
  const player = wallets[wallet];

  if (!player) {
    return res.status(404).json({ error: 'Wallet not found.' });
  }

  return res.json({
    username: player.username,
    wallet,
    items: player.inventory
  });
});

// Route: Add an item to a player’s inventory
app.post('/api/inventory/:wallet/add', (req, res) => {
  const wallet = req.params.wallet;
  const { item } = req.body;

  if (!wallets[wallet]) {
    return res.status(404).json({ error: 'Wallet not found.' });
  }

  if (!item) {
    return res.status(400).json({ error: 'Item name required.' });
  }

  wallets[wallet].inventory.push(item);

  return res.json({
    message: `Item "${item}" added to inventory.`,
    inventory: wallets[wallet].inventory
  });
});

// Health check
app.get('/', (req, res) => {
  res.send('🛡️ Welcome to the Web3 Game Inventory API by @ordinarycopper');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
