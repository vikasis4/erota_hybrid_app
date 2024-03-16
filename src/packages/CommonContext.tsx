

const CommonContext = ({ children }: { children: JSX.Element }) => {

    var Providers = [
        {}
    ];

    var Element = <>{children}</>

    return (
        Providers.reduceRight((Child: any, Parent: any) => {
            return (
                <Parent>
                    {Child}
                </Parent>
            )
        }, Element)
    )
}

export default CommonContext