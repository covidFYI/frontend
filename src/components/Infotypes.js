const Infotypes = ({ infotypes }) => {
	const iconMapping = {
		Doctor: "icon-doctor.svg",
		Government: "icon-govt-officers.svg",
		Helpline: "icon-call.svg",
		Hospitals: "icon-hospital.svg",
		Laboratory: "icon-labs.svg",
		"Fever Clinics": "icon-fever.svg",
		"Quarantine Facility": "icon-quarantine.svg",
	};

	return (
		<>
			<div className={`infotypes-container grid-${infotypes.length}-col`}>
				{infotypes.map((info) => {
					return (
						<div className="info-icon">
							<img src={`/assets/${iconMapping[info]}`} />
							<p>{info}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Infotypes;
