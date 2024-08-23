import { cn } from '@/lib/utils';
import * as React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './flter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFilterGroup } from './checkbox-filters-group';

interface Props {
    className?: string;
}

export const Filters: React.FunctionComponent<Props> = ({ className }) => {
    return (
        <div className={cn('', className)}>
            <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />
            {/* верхние чекбоксы */}
            <div className='flex flex-col gap-4'>
                <FilterCheckbox text="Можно собирать" value="1" />
                <FilterCheckbox text="Новинки" value="2" />
            </div>

            {/* фильтр цен */}
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
                    <Input type="number" placeholder="1000" min={100} max={1000} defaultValue={1000} />
                </div>
                <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} className='mb-5' />
            </div>

            <CheckboxFilterGroup
                title='Ингридиенты'
                className='mt-5'
                limit={3}
                defaultItems={[
                    {
                        text: "лук",
                        value: "1"
                    },
                    {
                        text: "пепперони",
                        value: "3"
                    },
                    {
                        text: "перец",
                        value: "2"
                    },
                    {
                        text: "курица",
                        value: "1"
                    }
                ]}
                items={[
                    {
                        text: "моцарелла",
                        value: "2"
                    },
                    {
                        text: "чеснок",
                        value: "3"
                    },
                    {
                        text: "помидор",
                        value: "5"
                    },
                    {
                        text: "лук",
                        value: "1"
                    },
                    {
                        text: "пепперони",
                        value: "3"
                    },
                    {
                        text: "перец",
                        value: "2"
                    },
                    {
                        text: "курица",
                        value: "1"
                    }
                ]}
            />
        </div>
    );
};

