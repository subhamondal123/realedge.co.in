'use client'

export default function DownloadBtnSection() {
    const onSubmit = () => {
        window.open("/assets/pdf/Design-Book.pdf", "_blank")
    }
    return (
        <>
            <button onClick={() => onSubmit()} type="submit" className="rounded-full cursor-pointer bg-orange-600 px-4 py-2 md:px-7 md:py-3 text-sm md:text-lg font-medium text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400">Download Design Book</button>
        </>
    )
}