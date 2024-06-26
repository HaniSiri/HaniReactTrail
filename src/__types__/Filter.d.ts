export interface filter {
    name: string,
    eanbleSearch?: boolean,
    values: {
        name: string,
        value: string,
        selected?: boolean,
        image?: string
    }[]
}

export interface filterInputData {
    filter: filter,
    handleChange: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export interface filterProps {
    newsFilters: filter[]
    className: string,
    setshowFilters: React.Dispatch<React.SetStateAction<boolean>>
}