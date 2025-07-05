import { useState } from "react";
import useEquipmentApi from "../hooks/useEquipmentApi";
import type { Equipment } from "../models/Equipment.model";

const EquipmentList = () => {
  const { result, loading } = useEquipmentApi();
  const [equipmentDetail, setEquipmentDetail] = useState<Equipment | null>(
    null
  );
  const [modal, setModal] = useState(false);

  return (
    <>
      <h2>I nostri prodotti</h2>
      <div className="container-box">
        {loading ? "loading..." : ""}
        {result.map((equipment, index) => (
          <div key={index} className="container">
            <div className="container-info">
              <h3>{equipment.name}</h3>
              <p>{equipment.claim}</p>
              <svg
                dangerouslySetInnerHTML={{ __html: equipment.icon }}
                width={30}
                height={30}
              />
              <p>
                <span>{equipment.pricePerMinute.toFixed(2)}€</span> / min
              </p>

              <button
                onClick={() => {
                  setEquipmentDetail(equipment);
                  setModal(!modal);
                }}
              >
                Book
              </button>
            </div>
            <img src={equipment.image} alt={equipment.name} />
          </div>
        ))}

        {/* TUTORIAL PèR FARE LA MODALE - FARLA IN UN ALTRO COMPONENTE */}

        {/* {equipmentDetail && modal && (
          // <Modal
          //   onSubmit={toggleModal}
          //   onClose={toggleModal}
          //   equipment={equipmentDetail}
          // />
          <>
            <button onClick={() => setModal(!modal)}>Chiudi</button>
            <div>funziona la modale</div>
          </>
        )} */}
      </div>
    </>
  );
};

export default EquipmentList;
