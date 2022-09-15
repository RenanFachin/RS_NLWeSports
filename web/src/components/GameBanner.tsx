// Tudo o que vai variar de um componente para outro
interface GameBannerProps {
    banenrUrl: string;
    title: string;
    adsCount: number;
}

export function GameBanner(props: GameBannerProps){
    return(
        <a href="" className='relative rounded-lg overflow-hidden'>
            <img src={props.banenrUrl} alt="" />

            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
                <strong className='text-white block'>
                    {props.title}
                </strong>

                <span className='text-zinc-300 font-sm block'>
                    {props.adsCount} anúncio(s)
                </span>
            </div>
      </a>    
    )
}