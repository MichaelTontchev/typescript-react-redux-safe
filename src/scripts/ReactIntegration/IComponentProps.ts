import { ReactNode } from 'react';

export interface IComponentProps {
	readonly children?: ReactNode;
	readonly [key: string]: any;
}