import SimpleTag from '@/molecules/SimpleTag';

const renderTag = (tag) => {
    return (
        <li key={tag} className="">
            <SimpleTag tag={tag} />
        </li>
    );
}

export default function SimpleTagList({tags}) {


    if(tags === undefined) {
        return;
    }

    return (
        <ul className="flex leading-3">
            {tags.map(renderTag)}
        </ul>
    )
}