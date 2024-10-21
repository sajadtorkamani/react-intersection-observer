import React from 'react'

const LoremIpsum: React.FC<{ count: number }> = ({ count }) => (
  <>
    {new Array(count).fill('x').map((_, index) => (
      <p key={index}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut
        consequatur doloribus et, eveniet excepturi fugiat itaque labore nisi
        odio perferendis praesentium quis, vel. A accusantium aspernatur ea esse
        facere illum non ratione, soluta tempore! Alias aliquam aliquid
        asperiores, assumenda at atque commodi corporis dignissimos dolorem
        dolorum eaque eius est et eveniet ex incidunt ipsa ipsam magnam nesciunt
        nihil numquam obcaecati perspiciatis porro quia quis quo reiciendis
        repellendus sapiente sunt tempore temporibus tenetur voluptas
        voluptates. At beatae blanditiis eaque, fugit iusto obcaecati
        praesentium similique veniam vero voluptatum. A aliquid beatae deleniti
        illo laudantium nihil rem repellendus suscipit tempora voluptatem! Modi!
      </p>
    ))}
  </>
)

export default LoremIpsum
