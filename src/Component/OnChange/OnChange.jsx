import React, { useState } from "react";
import { jsPDF } from "jspdf";

function OnChange() {
  const [Name, SetName] = useState("Guest");
  const [Product, setProduct] = useState("Custom Order");
  const [Quantity, SetQutantity] = useState(1);
  const [Commet, SetCommet] = useState("");
  const [City, SetCity] = useState("");
  const [Payment, SetPaymet] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("INVOICE", 90, 20);

    doc.setFontSize(12);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 140, 30);

    doc.setFontSize(14);
    doc.text("Customer Details:", 20, 40);
    doc.setFontSize(12);
    doc.text(`Name: ${Name}`, 20, 48);
    doc.text(`City: ${City}`, 20, 56);
    doc.text(`Payment Method: ${Payment}`, 20, 64);

    doc.setFontSize(14);
    doc.text("Order Details:", 20, 80);
    doc.setFontSize(12);
    doc.text(`Product: ${Product}`, 20, 88);
    doc.text(`Quantity: ${Quantity}`, 20, 96);
    doc.text(`Comments: ${Commet || "-"}`, 20, 104);

    // total cost
    const pricePerItem = 100;
    const total = pricePerItem * Number(Quantity);
    doc.text(`Price per: INR ${pricePerItem}`, 20, 112);
    doc.text(`Total: INR ${total}`, 20, 120);

    doc.line(20, 124, 180, 124);

    doc.setFontSize(10);
    doc.text("Thank you for your order!", 20, 132);

    doc.save("invoice.pdf");
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">OnChange</h1>
        <div className="p-3 d-flex justify-content-center align-itms-center">
          <div className="border-bottom m-5 rounded-5 border-top border-2 col-md-8 p-4">
            <form onSubmit={handleSubmit}>
              <h3 className="text-center">Order</h3>
              <hr />

              <input
                className="px-1 rounded-2 w-100 mb-2"
                type="text"
                value={Name}
                placeholder="Type Name..."
                onChange={(e) => SetName(e.target.value)}
                required
              />
              <span>Name: {Name}</span>
              <br />
              <br />

              <input
                className="px-1 rounded-2 w-100 mb-2"
                type="text"
                value={Product}
                placeholder="Product Name..."
                onChange={(e) => setProduct(e.target.value)}
                required
              />
              <span>Product: {Product}</span>
              <br />
              <br />

              <input
                className="px-1 rounded-2 w-100 mb-2"
                value={Quantity}
                type="number"
                min={1}
                max={10}
                onChange={(e) => SetQutantity(e.target.value)}
                required
              />
              <span>Quantity: {Quantity} (Max: 10)</span>
              <br />
              <br />

              <textarea
                className="w-100 rounded-2"
                placeholder="Comment Please..."
                onChange={(e) => SetCommet(e.target.value)}
              />
              <span>Comment: {Commet}</span>
              <br />
              <br />

              <select
                className="w-25 rounded-2 p-1 px-4"
                defaultValue=""
                onChange={(e) => SetCity(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select the city
                </option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Rajkot">Rajkot</option>
                <option value="Junagudh">Junagudh</option>
              </select>
              <span className="px-5">City: {City}</span>
              <br />
              <br />

              <div className="d-flex flex-wrap gap-4 align-items-center">
                <span>Pay:</span>
                {["MASTER-CARD", "GOOGLE WALLET", "CREDIT-CARD", "PAYPAL"].map(
                  (pay) => (
                    <label key={pay}>
                      <input
                        type="radio"
                        name="payment"
                        value={pay}
                        checked={Payment === pay}
                        onChange={(e) => SetPaymet(e.target.value)}
                        className="mx-1"
                        required
                      />
                      {pay}
                    </label>
                  )
                )}
              </div>
              <br />
              <span>Payment Method: {Payment}</span>
              <br />
              <br />
              <br />
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="border-0 px-3 rounded-4 fs-4 btn btn-primary"
                >
                  Submit & Invoice PDF
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <hr />
    </>
  );
}

export default OnChange;
