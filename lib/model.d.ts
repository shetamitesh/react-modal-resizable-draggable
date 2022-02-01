import { Component } from 'react';
import './index.css';
interface PropTypes {
    className: string;
    width: number;
    height: number;
    bottom: number;
    right: number;
    isDragging: boolean;
    isOpen: boolean;
    isMinimised: boolean;
    onRequestRecover: () => void;
    onFocus: () => void;
}
export default class Modal extends Component<PropTypes> {
    node?: HTMLDivElement | null;
    render(): JSX.Element;
}
export {};
