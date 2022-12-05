type Props = {
    componentsMap: Map<number, any>;
    id: string;
};

export const GetComponent = ({ componentsMap, id }: Props) => {
    const gotComponent = (id: string) => componentsMap.get(parseInt(id))
    const resolvedComponent = gotComponent(id)

    return resolvedComponent()
}
