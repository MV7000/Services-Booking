import CategorySide from "./_components/CategorySide/CategorySide";


const layout = ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <main>
            <div className="grid grid-row-2 grid-cols-1 sm:grid-cols-6">
                <div className="sm:min-h-[70vh] ">
                  <CategorySide/>
                </div>
                <div className="col-span-5 my-auto py-10">
            {children}
                </div>
            </div>
        </main>
    )
}

export default layout
