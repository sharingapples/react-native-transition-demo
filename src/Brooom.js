const Brooom = {
  out: (value, bounds) => ({
    left: value.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -bounds.width],
    }),
    width: bounds.width,
    transform: [{
      skewX: value.interpolate({
        inputRange: [0, 0.1, 0.9, 1],
        outputRange: ["0deg", "-20deg", "-20deg", "0deg"],
      }),
    }],
  }),
  in: (value, bounds) => ({
    left: value.interpolate({
      inputRange: [0, 1],
      outputRange: [bounds.width, 0],
    }),
    width: bounds.width,
    transform: [{
      skewX: value.interpolate({
        inputRange: [0, 0.1, 0.9, 1],
        outputRange: ["0deg", "-20deg", "-20deg", "0deg"],
      }),
    }],
  }),
};

export default Brooom;
