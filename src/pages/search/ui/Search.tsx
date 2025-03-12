import { useSearchStore } from "@/app/providers/store/search/searchStore";
import Loading from "@/pages/load/Loading";
import films_serials from "@/shared/const/films&serials";
import { FormEvent, useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import Best_result from "./pages/best_result";
import NotFound from "./pages/NotFound";

const Search = () => {
    const [placeholder, setPlaceholder] = useState<boolean>(false);
    const [query, setQuery] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [type, setType] = useState<string>(sessionStorage.getItem("type") || "multi");
    const [lastQuery, setLastQuery] = useState<string>(sessionStorage.getItem("lastQuery") || "");


    const { data, setData } = useSearchStore();

    const [text] = useTypewriter({
        words: films_serials,
        loop: true,
        delaySpeed: 2000,
        typeSpeed: 100,
        deleteSpeed: 100
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query == "") {
            setError(true);
        } else {
            setError(false);
            setData(page, setLoading, query, type);
            sessionStorage.setItem("lastQuery", query);
            setLastQuery(query);
            setQuery("");
        }
    }

    const buttonClassName = (buttonType: string) => {
        return `text-[18px] p-2 rounded-[10px] ${type == buttonType ? "bg-[#F8B319]" : "bg-gray-700"}`
    }

    const setSessionType = (newType: string) => {
        sessionStorage.setItem("type", newType);
        setType(sessionStorage.getItem("type") || "multi");
        if (data.page > 0) {
            setData(page, setLoading, lastQuery, newType);
        }
    }

    return (
        <div className="text-white p-4 flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-6">
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
                    <input
                        type="text"
                        className="bg-[#21242D] p-2 rounded-[10px] w-[30svh]"
                        placeholder={placeholder ? "Искать..." : text}
                        onFocus={() => setPlaceholder(true)}
                        onMouseEnter={() => setPlaceholder(true)}
                        onMouseLeave={() => setPlaceholder(false)}
                        onBlur={() => setPlaceholder(false)}
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                    {error && <h1 className="text-[18px] text-red-500">Пожалуйста, заполните данные!</h1>}
                </form>
                <div className="flex flex-col gap-y-2">
                    <h2 className="text-[20px] font-semibold">Категория:</h2>
                    <div className="flex gap-x-3">
                        <button className={buttonClassName("tv")} onClick={() => setSessionType("tv")}>Сериалы</button>
                        <button className={buttonClassName("movie")} onClick={() => setSessionType("movie")}>Фильмы</button>
                        <button className={buttonClassName("multi")} onClick={() => setSessionType("multi")}>Все</button>
                    </div>
                </div>
            </div>
            {loading ? <Loading/> : data.page > 0 ? data.results[0] ?
                <div className="flex flex-col gap-y-5">
                    <Best_result data={data.results[0]} type={type}/>
                </div> : <NotFound/> : <h1>Введите запрос</h1>}
        </div>
        
    )
}

export default Search;