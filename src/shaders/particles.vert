uniform float u_bass;
uniform float u_mid;
uniform float u_treble;
uniform float u_frequencyAvg;
uniform float u_time;
uniform float u_frequencyScale;
uniform float u_frequencyAvgScale;
uniform float u_noiseScale;

attribute float frequency;
attribute vec2 age;

varying float v_frequency;
varying vec2 v_age;

void main() {
	v_frequency = frequency;
	v_age = age;

	float scale_f = pow(3. * frequency, 2.) * u_frequencyScale;
	float scale_a = pow(2. * u_frequencyAvg, 2.) * u_frequencyAvgScale;

	vec4 norm = vec4(normalize(position), 0.);

	float noise = cnoise(vec4(norm.xyz * u_noiseScale, u_time));

	vec4 displacement = (norm * scale_a) + (norm * abs(noise) * scale_f);

	vec4 newPosition = vec4(position, 1.) + displacement;

	vec4 mvPosition = modelViewMatrix * newPosition;

	float size = 40. + length(displacement) * .5;

	gl_PointSize = size * (size / -mvPosition.z);
	gl_Position = projectionMatrix * modelViewMatrix * newPosition;
}
