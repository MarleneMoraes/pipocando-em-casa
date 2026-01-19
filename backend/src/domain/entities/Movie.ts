export interface MovieProps {
    id: string;
    title: string;
    overview: string;
    rating: number;
    posterPath: string;
    releaseDate: Date;
}

export class Movie {
    private props: MovieProps;

    constructor(props: MovieProps) {
        this.validate(props);
        this.props = props;
    }

    private validate(props: MovieProps) {
    if (!props.title) throw new Error("Title is required");
    if (props.rating < 0 || props.rating > 10) throw new Error("Invalid rating");
  }

    get id() { return this.props.id; }
    get title() { return this.props.title; }
    get overview() { return this.props.overview; }
    get rating() { return this.props.rating; }
    get posterUrl() { return this.props.posterPath; }
    get releaseDate() { return this.props.releaseDate; }
}