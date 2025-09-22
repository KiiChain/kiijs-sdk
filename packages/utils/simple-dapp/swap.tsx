import React, { useState } from 'react';

export default function SwapPage() {
  const [fromToken, setFromToken] = useState('');
  const [toToken, setToToken] = useState('');
  const [amount, setAmount] = useState('');

  const handleSwap = () => {
    // nanti isi logika swap di sini
    alert(`Swap ${amount} ${fromToken} to ${toToken}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Token Swap</h1>
      <div style={{ marginBottom: 10 }}>
        <label>From Token:</label>
        <input
          type="text"
          value={fromToken}
          onChange={(e) => setFromToken(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>To Token:</label>
        <input
          type="text"
          value={toToken}
          onChange={(e) => setToToken(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={handleSwap}>Swap</button>
    </div>
  );
}
