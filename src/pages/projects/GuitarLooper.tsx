import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CaseStudySection from "@/components/CaseStudySection";
import ProjectMeta from "@/components/ProjectMeta";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import walkthroughVideo from "@/assets/guitar-looper-walkthrough.mp4.asset.json";
import projectReport from "@/assets/guitar-looper-report.pdf.asset.json";

const linkButtonPrimary =
  "inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:opacity-90 transition-opacity";
const linkButtonSecondary =
  "inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-md hover:bg-secondary transition-colors";

const sensorFlow = [
  {
    title: "Physical interaction",
    detail: "Button press and guitar movement",
  },
  { title: "Arduino", detail: "Reads the physical sensors" },
  {
    title: "USB serial connection",
    detail: "Sends the sensor values to the laptop",
  },
  {
    title: "Max/MSP receiver patch",
    detail: "Identifies the button and movement values",
  },
  {
    title: "Main Max/MSP patch",
    detail: "Records, loops and changes the guitar audio",
  },
  { title: "Speakers", detail: "Play the live and processed sound" },
];

const audioFlow = [
  { title: "Electric guitar", detail: "Live playing" },
  { title: "Audio Go Box", detail: "Carries the sound into the laptop" },
  { title: "Max/MSP", detail: "Records and processes the signal" },
  {
    title: "Recorded loop and live guitar",
    detail: "Played together",
  },
  { title: "Speakers", detail: "Combined output" },
];

const FlowColumn = ({
  heading,
  steps,
}: {
  heading: string;
  steps: { title: string; detail: string }[];
}) => (
  <div>
    <p className="project-tag mb-4">{heading}</p>
    <ol className="space-y-2">
      {steps.map((step, index) => (
        <li key={step.title}>
          <div className="rounded-md border border-border bg-card px-4 py-3">
            <p className="text-sm font-semibold text-foreground">{step.title}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {step.detail}
            </p>
          </div>
          {index < steps.length - 1 && (
            <div className="flex justify-center py-1" aria-hidden="true">
              <span className="text-muted-foreground text-sm">↓</span>
            </div>
          )}
        </li>
      ))}
    </ol>
  </div>
);

const GuitarLooper = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <article className="container-content">
          <Link
            to="/projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-16 inline-block"
          >
            ← Back to projects
          </Link>

          <h1 className="mb-5">Motion-Controlled Guitar Looper</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            An interactive musical system that turns an electric guitar into
            both an instrument and a physical controller.
          </p>

          <div className="mt-8 space-y-4 text-base text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              Working with musician Hugh Finucane, I developed a prototype that
              could record a short section of live guitar playing, repeat it as
              a continuous loop and allow the performer to change the sound by
              moving the guitar.
            </p>
            <p>
              The project was created using Max/MSP and Arduino. Max/MSP is a
              visual programming environment used to build interactive audio and
              media systems. Arduino is a small programmable electronic board
              that can collect information from physical sensors.
            </p>
            <p>
              Together, these technologies allowed us to connect the performer’s
              physical movements with changes to the recorded sound. A button
              attached to the guitar controlled when recording began and ended,
              while a movement sensor detected how the instrument was being
              raised or tilted.
            </p>
            <p>
              This meant that the performer could control the recorded loop
              without stopping to operate the computer. The interaction became
              part of the musical performance itself.
            </p>
          </div>

          <ImagePlaceholder
            label="Full project setup"
            description="A wide photograph showing the complete setup: the electric guitar, the attached button and movement sensor, the Arduino board, the Audio Go Box and the laptop running Max/MSP. If no photograph of the full setup exists, use a clear screenshot of the complete Max/MSP performance patch instead."
          />

          <ProjectMeta
            items={[
              {
                label: "Role",
                value:
                  "Interaction Design, Arduino Integration and Max/MSP Development",
              },
              { label: "Collaborator", value: "Hugh Finucane" },
              {
                label: "Project Type",
                value: "Interactive Audio and Physical Computing",
              },
              { label: "Course", value: "CS4174 Performance Technology" },
              {
                label: "Tools",
                value:
                  "Max/MSP, Arduino, Electric Guitar, Audio Go Box and Valhalla Supermassive",
              },
            ]}
          />

          <section className="pb-4">
            <h2 className="case-study-heading">Project Links</h2>
            <div className="flex flex-wrap gap-3">
              <a href="#receiver-patch" className={linkButtonSecondary}>
                View Max Receiver Patch
              </a>
              <a href="#arduino-code" className={linkButtonSecondary}>
                View Arduino Code
              </a>
              <a href="#patch-walkthrough" className={linkButtonSecondary}>
                Watch Patch Walkthrough
              </a>
              <a
                href={projectReport.url}
                target="_blank"
                rel="noopener noreferrer"
                className={linkButtonPrimary}
              >
                Read Project Report
              </a>
            </div>
          </section>

          <CaseStudySection title="Concept and Motivation">
            <p>
              The initial idea was to explore how music and technology could be
              combined in a way that remained practical for a live performer.
            </p>
            <p>
              Musicians normally control digital effects using pedals, physical
              control panels or software displayed on a computer. These controls
              can be effective, but they may require the performer to carry out
              a separate action that is not directly connected to playing the
              instrument.
            </p>
            <p>
              We wanted to investigate whether movements that naturally occur
              while holding and playing a guitar could be used as another form
              of control.
            </p>
            <p>
              This led us to the idea of creating an augmented instrument. An
              augmented instrument is a traditional musical instrument that has
              been extended using sensors or digital technology. The original
              instrument remains familiar to the musician, but it gains
              additional ways of controlling or changing its sound.
            </p>
            <p>
              Our aim was not to replace the guitar or completely redesign how it
              was played. Instead, we wanted to add a new layer of interaction.
              The guitar would continue to produce the live sound, while its
              position and movement would also control a recorded version of
              that sound.
            </p>
            <p>The project had two main objectives.</p>
            <p>
              The first was to create a system that could realistically be
              demonstrated during a live musical performance. The performer
              needed to be able to record and manipulate sound without
              repeatedly returning to the laptop.
            </p>
            <p>
              The second was to explore movement as an alternative form of
              interaction. Rather than relying entirely on screen-based
              controls, we wanted physical actions such as lifting or tilting
              the guitar to create an immediate digital response.
            </p>
            <p>
              Research into augmented musical instruments also influenced the
              project. In particular, we were interested in how sensors could
              capture expressive gestures made by a performer and translate
              those gestures into useful controls.
            </p>

            <ImagePlaceholder
              label="Early concept sketch"
              description="An early concept sketch showing the guitar, sensors, Arduino and laptop, or a sketch showing how movement would affect the sound. Caption: Early planning explored how physical guitar movements could be connected to different audio controls."
            />

            <ImagePlaceholder
              label="The guitar before the sensors were attached (optional)"
              description="A photograph of the guitar before or during the process of attaching the sensors. Caption: The electric guitar remained the main instrument while the sensors added a second layer of interaction."
            />
          </CaseStudySection>

          <CaseStudySection title="System and Interaction">
            <p>
              The final system combined an electric guitar, an Audio Go Box, an
              Arduino board, a button, an accelerometer and a custom Max/MSP
              patch.
            </p>
            <p>
              The Audio Go Box acted as an audio interface. It carried the sound
              produced by the electric guitar into the laptop so that Max/MSP
              could record and process it.
            </p>
            <p>
              The Arduino handled the physical controls. It collected
              information from the button and accelerometer and sent those
              values to Max/MSP through a USB connection.
            </p>
            <p>
              The accelerometer is a small sensor that detects movement and
              orientation. In this project, it allowed the system to recognise
              when the guitar was being raised, lowered or tilted.
            </p>
            <p>The interaction worked in four main stages.</p>

            <h3 className="text-foreground pt-6">1. Beginning the recording</h3>
            <p>
              The performer pressed the button attached to the guitar to begin
              recording.
            </p>
            <p>
              When the button was pressed, Max/MSP first stopped any loop that
              was already playing and cleared the previous recording. This
              ensured that each new recording began with an empty space rather
              than being added to the previous sound.
            </p>
            <p>The system then began recording the live guitar signal.</p>

            <ImagePlaceholder
              label="The button attached to the guitar"
              description="A close-up photograph of the physical button attached to the guitar. Caption: The button gave the performer a clear way to begin and end each recording."
            />

            <h3 className="text-foreground pt-6">2. Creating the loop</h3>
            <p>
              When the button was pressed for a second time, the recording
              stopped and the newly recorded guitar section began playing back
              automatically.
            </p>
            <p>This repeated section of audio is known as a loop.</p>
            <p>
              A timer inside the Max/MSP patch measured the exact length of the
              recording. The system used this measurement to make sure that only
              the recorded guitar phrase was repeated.
            </p>
            <p>
              Without this timer, Max/MSP could have continued playing through
              the unused part of the recording space, creating silence at the
              end of every repetition.
            </p>
            <p>
              By measuring the recording accurately, the patch created a
              continuous loop that remained in time with the performance.
            </p>

            <ImagePlaceholder
              label="Recording and looping section of the Max/MSP patch"
              description="A cropped screenshot of the section of the Max/MSP patch containing the recording control, the record~ object (which captures the incoming audio), buffer~ (the space the audio is stored in), the timer, prepend loopend and the groove~ object (which plays the stored audio back). Caption: This part of the patch records the guitar, measures the duration of the recording and repeats only the captured section."
            />

            <h3 className="text-foreground pt-6">
              3. Controlling the loop through movement
            </h3>
            <p>
              Once the recorded section was playing, the performer could change
              its volume by moving the guitar.
            </p>
            <p>
              The accelerometer continuously measured the guitar’s orientation.
              These readings were sent through Arduino and received by Max/MSP
              as numerical values.
            </p>
            <p>
              The patch converted these raw sensor values into a range that
              could control audio volume. As the position of the guitar changed,
              the level of the recorded loop also changed.
            </p>
            <p>
              This allowed the performer to make the loop quieter or louder
              through a physical movement rather than by adjusting a slider on
              the computer.
            </p>
            <p>
              The live guitar signal remained separate from the recorded loop.
              This meant that the performer could continue playing new material
              over the repeated recording.
            </p>

            <ImagePlaceholder
              label="Movement direction used to control volume"
              description="A photograph or diagram showing the direction in which the guitar was moved to control volume. Caption: The movement sensor translated changes in the guitar’s position into changes in the volume of the recorded loop."
            />

            <h3 className="text-foreground pt-6">
              4. Activating the audio effect
            </h3>
            <p>Tilting the guitar forward controlled an additional audio effect.</p>
            <p>
              The project used Valhalla Supermassive, an audio-processing plugin
              available inside Max/MSP. The plugin can make a sound feel larger,
              more spacious or more heavily processed.
            </p>
            <p>
              The accelerometer detected when the guitar passed a chosen
              forward-tilt position. Once it crossed this threshold, Max/MSP
              increased the effect applied to the recorded loop.
            </p>
            <p>
              Returning the guitar to its normal position removed most of the
              effect.
            </p>
            <p>
              This created a visible relationship between the performer’s
              movement and the resulting change in sound. An audience could see
              the guitar being tilted and hear the loop change at approximately
              the same moment.
            </p>

            <ImagePlaceholder
              label="Movement threshold and effect controls in the patch"
              description="A cropped screenshot showing the accelerometer input, the movement threshold and the Valhalla Supermassive controls. Caption: The forward tilt of the guitar controlled whether the recorded loop was played normally or with the additional audio effect."
            />

            <h3 className="text-foreground pt-6" id="receiver-patch">
              How the different parts communicated
            </h3>
            <p>The project used two connected Max/MSP patches.</p>
            <p>
              The first was a receiver patch. Its purpose was to collect the
              information arriving from Arduino and separate the different
              sensor readings.
            </p>
            <p>
              The Arduino labelled each value before sending it. For example,
              the movement readings and button state were transmitted with
              different identifying letters.
            </p>
            <p>
              The receiver patch recognised these labels, converted the incoming
              information back into usable numbers and sent each value to the
              correct part of the main performance patch.
            </p>
            <p>
              The main patch then used the button information to control
              recording and used the movement information to control volume and
              audio effects.
            </p>
            <p>
              This separation made the system easier to organise. One patch dealt
              with receiving and identifying the sensor information, while the
              other dealt with recording and processing the guitar sound.
            </p>

            <ImagePlaceholder
              label="Max/MSP receiver patch"
              description="A clean screenshot of the Max/MSP receiver patch, with the serial object, the route object and the outputs labelled ax, ay, az and button clearly visible. Caption: The receiver patch separates the information arriving from Arduino and sends each sensor value to the appropriate part of the main system."
            />

            <figure className="my-10 not-prose" id="arduino-code">
              <div className="rounded-md border border-border bg-secondary/40 p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <FlowColumn heading="Sensor flow" steps={sensorFlow} />
                  <FlowColumn heading="Audio flow" steps={audioFlow} />
                </div>
              </div>
              <figcaption className="mt-3 text-xs text-muted-foreground text-center">
                The sensor information and guitar audio enter the laptop through
                separate routes before being combined inside Max/MSP.
              </figcaption>
            </figure>

            <h3 className="text-foreground pt-6" id="patch-walkthrough">
              Max/MSP patch walkthrough
            </h3>
            <p>
              The following walkthrough explains the main sections of the
              Max/MSP patch and how they work together.
            </p>
            <p>
              It shows how the button begins and ends a recording, how the
              previous audio is cleared, how the length of the recording is
              measured and how the resulting loop is played back.
            </p>
            <p>
              It also explains how the movement sensor controls the volume of
              the loop and activates the Valhalla Supermassive audio effect.
            </p>

            <figure className="my-8 not-prose">
              <div className="rounded-md overflow-hidden border border-border bg-secondary/40">
                <video
                  src={walkthroughVideo.url}
                  controls
                  preload="metadata"
                  className="w-full h-auto"
                >
                  Your browser does not support embedded video.
                </video>
              </div>
              <figcaption className="mt-3 text-xs text-muted-foreground text-center">
                A walkthrough of the Max/MSP patch explaining how recording,
                looping and movement control were built. This is an explanation
                of the system rather than footage of the live performance.
              </figcaption>
            </figure>
          </CaseStudySection>

          <CaseStudySection title="Development Process">
            <p>
              The project went through several changes before reaching its final
              form. The development process involved testing not only whether
              the technology worked, but also whether it was practical and
              comfortable for the performer.
            </p>

            <h3 className="text-foreground pt-6">Choosing the controls</h3>
            <p>
              We agreed early in the process that the system would use a button
              and an accelerometer.
            </p>
            <p>
              The button was chosen for recording because it gave the performer a
              clear on-or-off action. A deliberate press could begin a
              recording, while a second press could stop it.
            </p>
            <p>
              The accelerometer was selected because it could detect several
              different types of movement from one sensor. This allowed us to
              experiment with raising, lowering and tilting the guitar without
              adding several separate controls.
            </p>
            <p>
              The combination gave us both a direct control and a movement-based
              control.
            </p>

            <ImagePlaceholder
              label="Early control diagram or sketch"
              description="An early diagram or sketch showing the proposed button and accelerometer controls. Caption: The initial interaction combined a deliberate button press with continuous movement data from the accelerometer."
            />

            <h3 className="text-foreground pt-6">
              Changing the position of the sensors
            </h3>
            <p>
              Our original plan was to attach the accelerometer to the neck of
              the guitar.
            </p>
            <p>
              After sketching and testing the arrangement, we realised that this
              position created unnecessary practical problems. A wire would have
              needed to run from the Arduino board along the guitar to the neck.
              This could have made the instrument uncomfortable to hold and
              could have interfered with the performer’s movement.
            </p>
            <p>
              Testing also showed that the accelerometer could still detect the
              required movements when positioned lower on the front of the
              guitar.
            </p>
            <p>
              We therefore moved the sensors closer to the lower part of the
              instrument. The Arduino board remained on the performer’s lap,
              allowing the wires to reach the sensors more easily.
            </p>
            <p>
              For the prototype, the sensors were attached using Blu Tack. This
              was suitable for testing, although a more permanent and secure
              attachment would be required in a developed version of the
              instrument.
            </p>

            <ImagePlaceholder
              label="Original and final sensor positions"
              description="A sketch showing the original planned sensor position on the guitar neck and the final position lower on the guitar. Caption: The sensor position was changed to reduce wiring and make the instrument more comfortable to play."
            />

            <ImagePlaceholder
              label="Final sensor placement"
              description="A close-up photograph of the final sensor placement. Caption: The final prototype placed the controls within reach of the Arduino while keeping them away from the main playing area."
            />

            <h3 className="text-foreground pt-6">
              Developing the Max/MSP patch
            </h3>
            <p>
              I was primarily responsible for connecting the Arduino controls to
              Max/MSP and building the recording and playback system.
            </p>
            <p>
              I first ensured that Arduino was correctly reading the physical
              sensors and sending the values to the laptop.
            </p>
            <p>
              I then worked on the receiver patch, which separated the incoming
              button and movement information. Once these values were available
              inside Max/MSP, I could connect them to the different parts of the
              audio system.
            </p>
            <p>
              The recording section required several actions to happen in a
              specific order.
            </p>
            <p>
              When recording began, the existing playback had to stop and the
              previous recording had to be cleared. The new sound then had to be
              recorded while a timer measured its duration.
            </p>
            <p>
              When recording ended, the timer value had to be sent to the
              playback system so that the correct section of audio would repeat.
            </p>
            <p>
              Developing this sequence involved breaking the interaction into
              smaller steps and checking that each action happened at the
              correct time.
            </p>

            <ImagePlaceholder
              label="Completed Max/MSP performance patch"
              description="A full screenshot of the completed Max/MSP performance patch. Caption: The completed patch combines live audio input, recording, timed loop playback, movement-controlled volume and audio effects."
            />

            <h3 className="text-foreground pt-6">Exploring visual effects</h3>
            <p>
              An earlier version of the project also included a visual element.
            </p>
            <p>
              I experimented with Jitter, the visual-processing part of Max/MSP,
              to investigate whether images or video could respond to the
              accelerometer data.
            </p>
            <p>
              One experiment involved fading two visual sources over one another
              as the guitar moved.
            </p>
            <p>
              Although this was technically interesting, we decided not to
              include the visuals in the final version. They did not contribute
              strongly enough to the main concept and risked distracting from
              the more important relationship between the performer’s movement
              and the changing guitar sound.
            </p>
            <p>
              Removing the visuals helped make the purpose of the project
              clearer. The final performance remained focused on augmenting the
              instrument’s audio rather than adding an unrelated screen-based
              element.
            </p>

            <ImagePlaceholder
              label="Early Jitter visual experiment (optional)"
              description="Only add this if an authentic screenshot from the project exists. Caption: An early visual experiment was removed so that the final project remained focused on sound and physical interaction."
            />

            <h3 className="text-foreground pt-6">Preparing the performance</h3>
            <p>
              The performance was planned around a guitar section that left room
              for some improvisation.
            </p>
            <p>
              Hugh practised playing while also carrying out the movements
              needed to control the volume and effects. Together, we worked out
              when the loop would be recorded and when the guitar would be moved
              or tilted.
            </p>
            <p>
              An early plan involved moving the guitar connection from the
              laptop to an amplifier after recording the loop. We later changed
              this arrangement and sent both the live guitar and recorded loop
              through Max/MSP.
            </p>
            <p>
              This created a more connected performance because the live and
              recorded signals could be managed within the same system.
            </p>
            <p>
              The rehearsal process also revealed an important usability issue. A
              movement that appeared simple during technical testing could
              become much more difficult when the performer was also
              concentrating on notes, rhythm, timing and improvisation.
            </p>
            <p>
              This showed that the project had to be considered from the
              performer’s point of view, not only from the perspective of
              whether the patch functioned correctly.
            </p>

            <ImagePlaceholder
              label="Rehearsal or performance media"
              description="Only add this if an authentic photograph or video clip from a rehearsal or the final performance exists. Caption: Rehearsal showed how the controls affected the performer while playing, not only how they worked during technical testing."
            />
          </CaseStudySection>

          <CaseStudySection title="Reflection">
            <p>
              The project successfully demonstrated the central idea of using an
              electric guitar as both a musical instrument and an interactive
              controller.
            </p>
            <p>
              The performer was able to record a guitar section, play it back as
              a loop and change the recorded sound using movements of the
              instrument. The live guitar could then be played over the repeated
              recording.
            </p>
            <p>
              One of the strongest parts of the project was the direct
              relationship between physical action and audio response. The
              performer did not need to return to the laptop each time the loop
              needed to change. Instead, the controls were incorporated into the
              instrument and the performance.
            </p>
            <p>
              The project also gave me practical experience in connecting
              hardware and software. I learned how Arduino could collect
              information from physical sensors and how Max/MSP could use that
              information to control audio in real time.
            </p>
            <p>However, the final performance also revealed limitations.</p>
            <p>
              The Valhalla Supermassive effect was controlled using a threshold.
              Once the guitar passed a particular forward position, the effect
              changed from almost entirely off to almost entirely on.
            </p>
            <p>
              This transition was more abrupt than we intended. A future version
              could use a gradual movement range or an additional physical
              control, such as a potentiometer, to increase and decrease the
              effect more smoothly.
            </p>
            <p>
              The movement controls were also not always as natural as expected.
              Hugh had to concentrate on playing, improvising and moving the
              guitar at the same time. This created a greater mental and
              physical demand than we had anticipated.
            </p>
            <p>
              If the project were developed further, I would simplify the
              musical arrangement during early testing and spend more time
              identifying movements that were already part of the performer’s
              natural playing style.
            </p>
            <p>
              I would also improve the physical design of the prototype. The
              temporary sensor attachments were suitable for demonstrating the
              idea, but a developed version would require smaller components,
              more secure enclosures and better cable management.
            </p>
            <p>
              From an interaction-design perspective, the most important lesson
              was that a system is not successful simply because the technology
              works.
            </p>
            <p>
              The controls must also make sense within the situation in which
              they are being used. In this case, they needed to be
              understandable, comfortable and manageable while the user was
              simultaneously performing music.
            </p>
            <p>
              The project expanded my understanding of what an interface can be.
              An interface does not always need to be a screen containing
              buttons and menus. Movement, physical objects and body position
              can also become meaningful ways of controlling a digital system.
            </p>

            <div className="not-prose my-8 grid md:grid-cols-2 gap-4">
              <div className="rounded-md border border-border bg-secondary/50 p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">
                  What worked
                </h3>
                <ul className="space-y-2 text-base text-muted-foreground leading-relaxed">
                  {[
                    "The button provided a clear method of starting and ending recordings.",
                    "The loop began playing immediately after the recording ended.",
                    "Guitar movement successfully controlled the recorded sound.",
                    "The live and recorded audio could be used together.",
                    "The prototype demonstrated the potential of an augmented instrument.",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-md border border-border bg-secondary/50 p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">
                  What I would improve
                </h3>
                <ul className="space-y-2 text-base text-muted-foreground leading-relaxed">
                  {[
                    "Replace the abrupt effect switch with a gradual control.",
                    "Choose movements that feel more natural while playing.",
                    "Reduce the amount of improvisation during early interaction testing.",
                    "Develop more secure sensor attachments and cable management.",
                    "Carry out further testing with different guitarists and playing positions.",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection title="Project Summary">
            <dl className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  label: "Challenge",
                  value:
                    "Allow a guitarist to record and manipulate sound without repeatedly stopping to operate a laptop.",
                },
                {
                  label: "Approach",
                  value:
                    "Attach a button and movement sensor to the guitar, send the sensor information through Arduino and use Max/MSP to control recording, looping, volume and audio effects.",
                },
                {
                  label: "Outcome",
                  value:
                    "A functional augmented-guitar prototype that connected physical instrument movements with real-time changes to recorded audio.",
                },
                {
                  label: "My contribution",
                  value:
                    "Arduino integration, serial communication, Max/MSP receiver development, recording and looping logic, movement mapping, audio-effect integration and technical testing.",
                },
              ].map((item) => (
                <div key={item.label}>
                  <dt className="project-tag mb-1">{item.label}</dt>
                  <dd className="text-base text-muted-foreground leading-relaxed">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </CaseStudySection>

          <div className="section-divider mt-10 pt-6 flex justify-between text-sm">
            <Link
              to="/projects/project-three"
              className="font-medium hover:text-accent transition-colors"
            >
              ← Previous: LearnBetter
            </Link>
            <Link
              to="/projects"
              className="font-medium hover:text-accent transition-colors"
            >
              All projects →
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default GuitarLooper;
