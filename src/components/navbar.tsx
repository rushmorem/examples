'use client';

import Image from 'next/image';
import React from 'react';
import Logo from '../../public/logo.svg';
import { AddSticky } from './add-sticky';

export function Navbar() {
    return (
        <div className="flex flex-col justify-between gap-8 py-20 sm:gap-16 md:flex-row">
            <Image
                className="max-h-16 w-min"
                src={Logo}
                alt="SurrealDB Stickies logo"
            />

            <div className="flex gap-4">
                <AddSticky color="pink" />
                <AddSticky color="purple" />
            </div>
        </div>
    );
}
