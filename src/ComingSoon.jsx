import React from 'react'
import './ComingSoon.css'

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="content">
        <div className="logo-section">
          <h1 className="logo">JP Fashion</h1>
          <div className="tagline">Online Dress Shopping</div>
        </div>
        
        <div className="main-content">
          <h2 className="coming-soon-text">Coming Soon</h2>
          <p className="description">
            Ladies, gents and kids clothing, bags, shoes and accessories, lifestyle, home appliances.
            Quality products, affordable prices, under one roof!
          </p>
          <div className="shop-tagline">Shop at JP Fashion</div>
        </div>

        <div className="animation-container">
          <div className="fabric-wave"></div>
          <div className="fabric-wave"></div>
          <div className="fabric-wave"></div>
          <div className="categories-preview">
            <div className="category clothing">👗</div>
            <div className="category bags">👜</div>
            <div className="category shoes">👠</div>
            <div className="category home">🏠</div>
          </div>
        </div>
      </div>
      
      <div className="floating-elements">
        <div className="thread thread-1"></div>
        <div className="thread thread-2"></div>
        <div className="thread thread-3"></div>
      </div>
    </div>
  )
}

export default ComingSoon