import React from 'react'

const Campanhas = props => {
return (
  <div>
    <section className='page-section'>
        <div className='container'>
          <div className='product-item bg-faded'>
            <div className='product-item-title d-flex'>
              <div className='p-5 d-flex mr-auto rounded'>
                <h2 className='section-heading mb-0'>
                  <span className='section-heading-upper'>Delicious Treats, Good Eats</span>
                  <span className='section-heading-lower'>Bakery &amp; Kitchen</span>
                </h2>
              </div>
            </div>
            <div className='product-item-description d-flex ml-auto'>
              <div className='p-5 rounded'>
                <p className='mb-0'>Our seasonal menu features delicious snacks, baked goods, and even full meals perfect for breakfast or lunchtime. We source our ingredients from local, oragnic farms whenever possible, alongside premium vendors for specialty goods.</p>
                <div className='progress'>
                  <div className='progress-bar bg-success' role='progressbar'  aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>
                </div>
                <p>Meta: R$ 5.000,00 / Atingidos: R$ 2.500,00</p>
                <div>
                  <button className='btn btn-success'>Contribuir</button>
                </div>
              </div>
            </div>
            <div className='ml-auto'>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Campanhas