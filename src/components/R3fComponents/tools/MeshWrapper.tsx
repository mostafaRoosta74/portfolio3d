import { ReactNode, useEffect, useRef, useState } from 'react';
import React from 'react';

export const MeshWrapper = (props: {
	forceActive: boolean;
	children: (
		active: boolean,
		onEnter: Function,
		onLeave: Function,
		carpet: any,
	) => ReactNode;
}) => {
	const [active, setActive] = useState(false);
	const carpet = useRef();

	useEffect(() => {
		setActive(props.forceActive);
	}, [props.forceActive]);

	const onEnter = () => setActive(true);
	const onLeave = () => setActive(false);
	return <>{props.children(active, onEnter, onLeave, carpet)}</>;
};
