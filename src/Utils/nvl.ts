export default <T>(value: T, valueIfNull: T) => (value ? value : valueIfNull);
