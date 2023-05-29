import React from 'react';

export interface LabelProps {
    title: string;
}

export default function Label({ title }: LabelProps) {
    return <span className="bg-blue-500 text-white px-4 py-1 rounded-lg">{title}</span>;
}
