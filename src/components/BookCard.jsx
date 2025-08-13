import React from 'react'

function BookCard({ad, muellif, sehife}) {
    
  return (
    <div>
        <div className="card">
            <h3>Kitabın adı:{ad}</h3>
            <p>Kitabın müəllifi:{muellif}</p>
            <p>Kitabın səhifə sayı:{sehife}</p>
        </div>
    </div>
  )
}

export default BookCard