import not_found from '@/shared/assets/icons/not_found.svg';

const NotFound = () => {
    return (
        <div className="w-full flex flex-col gap-y-5 bg-transparent items-center flex-shrink-0">
            <img src={not_found} className='w-[300px] h-[300px]' alt="Not Found" />
            <div className='flex flex-col items-center gap-y-3 text-[20px]'>
                <h1 className='text-[30px]'>Информация не найдена!</h1>
                <p>Проверьте, правильно ли вы указали название, или категорию видеоконтента</p>
            </div>
        </div>
    )
}

export default NotFound;