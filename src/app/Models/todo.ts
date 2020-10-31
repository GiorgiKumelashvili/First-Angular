export default class {
    private id:Number;
    private title:String;
    private job:String;
    private completed:Boolean;

    constructor(id:Number=0,tittle:String='',job:String='',completed:Boolean=false) {
        this.id        = id;
        this.title     = tittle;
        this.job       = job;
        this.completed = completed;
    }

    // Getters
	public get $id(): Number {
		return this.id;
	}

	public get $title(): String {
		return this.title;
	}

	public get $job(): String {
		return this.job;
	}

	public get $completed(): Boolean {
		return this.completed;
	}

    // Setters
	public set $id(value: Number) {
		this.id = value;
	}

	public set $title(value: String) {
		this.title = value;
	}

	public set $job(value: String) {
		this.job = value;
	}

	public set $completed(value: Boolean) {
		this.completed = value;
	}
}