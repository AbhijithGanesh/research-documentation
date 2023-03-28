import React from "react";


const ThumbNail: React.FC = () => {
    return (
        <>
            <section className="flex items-center py-0">
                <img src="/abhijithganesh.png" className="rounded-full w-12 h-12 p-2" alt="Abhijith Ganesh" />
                <section className="text-lg font-semibold gap-2">
                    By Abhijith Ganesh
                </section>
            </section>
        </>
    )
}


export default ThumbNail