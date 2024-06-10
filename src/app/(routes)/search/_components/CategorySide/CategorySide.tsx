import getData from '@/app/functions/GetData/getServices'
import ServicesList from '@/components/ServicesList/ServicesList'

const CategorySide = async () => {
    const dataServices= await getData()
    return (
        <section className='py-5'>
        <h2 className='text-[calc(var(--index))] text-center font-bold font-montserrat text-[var(--purpleLight)] [text-shadow:1px_1px_3px_var(--cyan)]' >Category:</h2>
            <ServicesList dataServices={dataServices} side='side'/>
        </section>
    )
}

export default CategorySide
