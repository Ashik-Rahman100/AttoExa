export default function ProjectCard() {
  return (
    <div className="card card-compact bg-base-100  shadow-xl border border-b-[#77892B]">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <p className="text-[#77892B] text-[14px]">Veluwe, Nederland</p>
        <h2 className="text-[24px] ">Herbebossing Veluwe</h2>

        <p>
          Dit project richt zich op het herstellen van gedegradeerde bossen in
          de Veluwe.....
        </p>
        <hr />
        <div className="pt-2">
          <p className="py-1 text-[17]">2.000.000 bomen geplant</p>
          <p className="py-1">10 bedreigde diersoorten beschermd</p>
          <p className="py-1"> 150 lokale banen gecreëerd</p>
        </div>
      </div>
    </div>
  );
}
