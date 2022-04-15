import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Index() {
    const { data, error } = useSWR("/api/item?id=423b8031-8523-46e1-b38f-d4d108553720", fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    return (
        <div>
            <h1>{data.content}</h1>
        </div>
    );
}

