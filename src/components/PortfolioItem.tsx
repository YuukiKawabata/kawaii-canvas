import React from 'react';

const PortfolioItem: React.FC = () => {
  return (
    <div className="bg-white text-black p-4">
      <img src="#" alt="ポートフォリオアイテム" />
      <h3 className="text-xl font-bold">アイテムタイトル</h3>
      <p>アイテムの説明</p>
    </div>
  );
};

export default PortfolioItem;
