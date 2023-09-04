export default {
	name: "sliding-filter-menu",
	props: {
		visible: Boolean,
		filter: Object,
		build: Object,
	},

	data() {
		return {
			allValue: false,
			errorFlag: false,
		};
	},

	model: {
		prop: "filter",
		event: "filterChangeEvent",
	},

	methods: {
		all: function () {
			const len = this.build.items.length;
			const items = this.build.items;
			for (let i = 0; i < len; i++) {
				this.getFieldPath(this.filter, items[i])[this.getLastField(items[i])] = this.allValue ? this.build.values.true : this.build.values.false;
			}
			this.$emit("filterChangeEvent", this.filter);
		},

		change() {
			const len = this.build.items.length;
			const items = this.build.items;
			let number = 0;
			for (let i = 0; i < len; i++) {
				if (this.getFieldPath(this.filter, items[i])[this.getLastField(items[i])] === this.build.values.true) number++;
			}
			if (number === len) this.allValue = this.build.values.true;
			else this.allValue = this.build.values.false;
			this.$emit("filterChangeEvent", this.filter);
		},

		getFieldPath(filter, item) {
			let fields = item.field.split(".");
			if (fields.length === 1) return filter;
			let len = fields.length - 3;
			let current = filter[fields[0]];
			for (let i = 1; i < len; i++) current = current[fields[i]];
			return current;
		},

		getLastField(item) {
			let fields = item.field.split(".");
			return fields[fields.length - 1];
		},
		log(message) {
			console.log(`%c[filter-menu] LOG\n| ${message} |`, "color: gray");
		},
		confirm(message) {
			console.log(`%c[filter-menu] CONFIRM\n| ${message} |`, "color: green");
		},
		warn(message) {
			this.errorFlag = true;
			console.info(`%c[filter-menu] WARNNING\n${message}`, "color: yellow");
		},
		error(message) {
			this.errorFlag = true;
			console.error(`[filter-menu] ERROR\n${message}`);
		},
	},

	created() {
		const build = this.build;
		if (build.values === undefined) build.values = {};
		if (build.values.true === undefined) build.values.true = true;
		if (build.values.false === undefined) build.values.false = false;
		if (build.default === undefined) build.default = build.values.false;
		if (build.all !== undefined && build.type !== "checkbox") build.all = undefined;

		if (build.debug) {
			this.log("РЕЖИМ ОТЛАДКИ ВКЛЮЧЕН");
			/**
			 * Проверка настроек для режима работы компонента
			 */
			if (build.type !== undefined)
				switch (build.type) {
					case "checkbox":
						this.log("Режим checkbox");
						break;
					case "radio":
						if (build.name === undefined) this.error("Для того, чтобы использовать режим radio, необходимо добавить поле name в объект конфигурации.");
						this.log("Режим radio");
						break;
					default:
						this.error("Неправильно указан режим работы (type = checkbox/radio\n");
						break;
				}
			else this.error("Не указан тип ввода");

			/**
			 * Проверка настроек для элементов компонента
			 */
			if (build.items === undefined) this.error("Список элементов отсутствует");
			else if (Array.isArray(build.items)) {
				if (build.items.length > 0) {
					let itemsFlag = true;
					for (let i = 0; i < build.items.length; i++) {
						let item = build.items[i];
						if (item.field === undefined) {
							itemsFlag = false;
							this.error(`Для поля под номером: ${i} отсутствует значение field\nЭто поле необходимо компоненту для того, чтобы реактивно изменять нужное поле в объекте фильтраци`);
						}
						if (this.getFieldPath(this.filter, item)[this.getLastField(item)] === undefined) {
							itemsFlag = false;
							this.error(`\nПоле ${item.field} в редактируемом объекте "Filter" не существует.\nСоздайте его, чтобы не потерять реактивность!`);
						}
					}
					if (itemsFlag) this.log("Пункты меню успешно инициализированы");
				} else this.warn("Список элементов пуст");
			} else this.error("Поле items должно быть массивом");

			/**
			 * Проверка настроек для выбора всего
			 */
			if (build.all !== undefined) {
				if (build.type === "checkbox") {
					if (build.all.title !== undefined) {
						if (typeof build.all.title !== "string" && typeof build.all.title !== "number") {
							this.warn("Для название пункта ALL рекомендуется использовать string или number");
						} else {
							this.log(`Добавлен общий пункт "${build.all.title}"`);
						}
					} else {
						this.error("Название пункта для выбора всего отсутствует");
					}
				} else {
					this.error('Для режима radio невозможно создать пункт "All"');
				}
			}
			if (build.default !== undefined) {
				if (build.type !== "checkbox") this.error("Значение по умолчанию доступно только для режима [checkbox]");
				else if (build.default !== build.values.true && build.default !== build.values.false) this.error("Значение по умолчанию задано некорректно");
			}

			if (this.errorFlag) this.warn("Исправьте проблемы в объекте конфигурации");
			else this.confirm("ВАЛИДАЦИЯ УСПЕШНО ПРОЙДЕНА!");
		}

		const len = build.items.length;
		const items = this.build.items;
		let number = 0;
		for (let i = 0; i < len; i++) {
			let field = this.getFieldPath(this.filter, items[i]);
			let fieldName = this.getLastField(items[i]);
			if (field[fieldName] === undefined) field[fieldName] = build.default;
			if (field[fieldName] === this.build.values.true) number++;
		}
		if (number === len) this.allValue = this.build.values.true;
		else this.allValue = this.build.values.false;
		this.$emit("filterChangeEvent", this.filter);
	},
};
