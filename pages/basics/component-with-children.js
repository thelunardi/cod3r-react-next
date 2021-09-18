import List from "../../components/list/List"
import ListItem from "../../components/list/ListItem"

export default function componentWithChildren(props) {
    return (
        <div>
            <List>
                <ListItem conteudo="Item 1" />
                <ListItem conteudo="Item 2" />
            </List>
        </div>
    )
}
