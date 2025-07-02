import React, { useEffect, useState } from "react";

function Details({ mode }) {
  const [animationKey, setAnimationKey] = useState(0);

  let fruit1 = "Banana";
  let fruit2 = "Durian";

  // 🔄 Force re-render with different key to retrigger animation
  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [mode]);

  return (
    <div
      key={animationKey}
      className={`details container mx-auto p-4 mt-5 mb-5 rounded-4 shadow-lg animate__animated animate__fadeInDown ${
        mode === "dark" ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <h2 className="text-center mt-3">Details</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi enim
        dolor quae dolorem possimus atque facere, consequatur cupiditate,
        distinctio iste doloribus eius dolorum a libero quod eos officiis cum
        tempore molestiae officia nesciunt quisquam, vero similique! Voluptate
        sed quisquam quo explicabo incidunt eos dolorum veniam cupiditate?
        Consequatur nam praesentium officia aut sequi molestias, dicta cumque
        voluptate quidem tempora voluptatum, nesciunt eligendi minima? Beatae,
        ea. Ipsa fuga totam a reprehenderit assumenda incidunt itaque voluptates
        perferendis corrupti doloremque! Repudiandae debitis aut quidem
        consectetur aperiam quos sit tempore pariatur corporis ratione, magnam,
        minima voluptatibus voluptas ab assumenda iusto illum dignissimos. Illum
        esse consequuntur autem similique, reprehenderit debitis quis provident
        quibusdam officiis voluptatum, impedit totam nesciunt architecto odio!
        Debitis doloremque dolor, autem, laboriosam id provident nisi ab sint
        eum placeat possimus totam corporis soluta voluptates enim quas adipisci
        dolorum beatae impedit, perspiciatis aliquid voluptatibus aut. Enim
        nesciunt veritatis corrupti quam in dignissimos atque.
      </p>
      <hr />
      <ul
        className="d-flex flex-wrap gap-5 list-unstyled justify-content-center align-items-center"
        id="list"
      >
        <li>Apple</li>
        <li>{fruit1}</li>
        <li>{fruit2}</li>
      </ul>
    </div>
  );
}

export default Details;
