import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { SlidersHorizontal } from '@phosphor-icons/react'
import React, { useState } from 'react'
import GenericCheckBox from './GenericCheckBox.tsx'

const Modal = ({ newsFilters }) => {
    let [isOpen, setIsOpen] = useState(false)
    const handleCheckboxChange = (event) => {
        console.log('event ', event);
        console.log('newsFilters ', newsFilters);
    }
    return (
        <>
            <Button onClick={() => setIsOpen(true)} className=" flex items-center rounded-md">
                <SlidersHorizontal size={24} color="#6e6e6e" weight='bold' />
            </Button>

            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={() => setIsOpen(false)}>
                <div className="fixed inset-0 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel transition className="w-full max-w-md rounded-xl p-6 backdrop-blur-3xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                            <DialogTitle as="h3" className="text-2xl font-medium text-white">
                                Filters
                            </DialogTitle>
                            {newsFilters.map((filter) => {
                                return <GenericCheckBox checkboxData={filter} handleChange={event => handleCheckboxChange(event)} />
                            })}
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default Modal