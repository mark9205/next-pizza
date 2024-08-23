import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';

export interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                {/* левая часть */}
                <div className='flex items-center gap-4'>
                    <Image src='/logo.png' alt='logo' height={35} width={35}></Image>
                    <div>
                        <h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
                        <p className='text-sm text-gray-400 leading-3'>Вкусней уже некуда</p>
                    </div>
                </div>
                {/* правая часть */}
                <div className='flex items-center gap-4'>
                    <Button variant='outline' className='flex items-center gap-2'>
                        <User size={16} />
                        Войти
                    </Button>
                    <div>
                        <Button className='group relative'>
                            <b>500 ₽</b>
                            <span className="h-full w-[1px] bg-white/30 mx-3" />
                            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                                <b>3</b>
                            </div>
                            <ArrowRight
                                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                            />
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
}
