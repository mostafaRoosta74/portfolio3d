import React, { ReactNode, useEffect, useRef, useState } from 'react';

const MeshWrapper = ({
	children,
	forceActive,
}: {
	forceActive: boolean;
	children: (
		active: boolean,
		onEnter: () => void,
		onLeave: () => void,
		carpet: NonNullable<unknown>,
	) => ReactNode;
}) => {
	const [active, setActive] = useState(false);
	const carpet = useRef();

	useEffect(() => {
		setActive(forceActive);
	}, [forceActive]);

	const onEnter = () => setActive(true);
	const onLeave = () => setActive(false);
	return <>{children(active, onEnter, onLeave, carpet)}</>;
};

export default MeshWrapper;
