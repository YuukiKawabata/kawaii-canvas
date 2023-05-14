import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioSection: React.FC = () => {
  return (
    <section className="bg-gray-100 text-black p-4">
      <h2 className="text-2xl font-bold">ポートフォリオ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* ポートフォリオアイテムを追加 */}
        <PortfolioItem />
        {/* ... */}
      </div>
    </section>
  );
};

export default PortfolioSection;
