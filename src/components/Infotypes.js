import Link from 'next/link'

const Infotypes = ({ infotypes, stateSelected }) => {
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
                        <Link href="/[state]/[category]" as={`/${stateSelected}/${info}`}>
						<div className="info-icon">
							<img src={`/assets/${iconMapping[info]}`} />
							<p>{info}</p>
						</div>
                        </Link>
					);
				})}
			</div>
		</>
	);
};

export default Infotypes;
